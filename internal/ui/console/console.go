package console

import (
	"net/http"
	"os"
	"path"
	"strings"
	"time"

	"github.com/caos/zitadel/internal/api/http/middleware"
)

type Config struct {
	Port                string
	ConsoleOverwriteDir string
	ShortCache          middleware.CacheConfig
	LongCache           middleware.CacheConfig
	CSPDomain           string
}

type spaHandler struct {
	fileSystem http.FileSystem
}

const (
	envRequestPath    = "/assets/environment.json"
	consoleDefaultDir = "./console/"
	handlerPrefix     = "/console"
)

var (
	shortCacheFiles = []string{
		"/",
		"/index.html",
		"/manifest.webmanifest",
		"/ngsw.json",
		"/ngsw-worker.js",
		"/safety-worker.js",
		"/worker-basic.min.js",
	}
)

func (i *spaHandler) Open(name string) (http.File, error) {
	ret, err := i.fileSystem.Open(name)
	if !os.IsNotExist(err) || path.Ext(name) != "" {
		return ret, err
	}

	return i.fileSystem.Open("/index.html")
}

func Start(config Config) (http.Handler, string, error) {
	consoleDir := consoleDefaultDir
	if config.ConsoleOverwriteDir != "" {
		consoleDir = config.ConsoleOverwriteDir
	}
	consoleHTTPDir := http.Dir(consoleDir)
	cache := AssetsCacheInterceptorIgnoreManifest(
		config.ShortCache.MaxAge.Duration,
		config.ShortCache.SharedMaxAge.Duration,
		config.LongCache.MaxAge.Duration,
		config.LongCache.SharedMaxAge.Duration,
	)
	security := middleware.SecurityHeaders(csp(config.CSPDomain), nil)
	handler := &http.ServeMux{}
	handler.Handle("/", cache(security(http.FileServer(&spaHandler{consoleHTTPDir}))))
	handler.Handle(envRequestPath, cache(security(http.StripPrefix("/assets", http.FileServer(consoleHTTPDir)))))
	return handler, handlerPrefix, nil
}

func csp(zitadelDomain string) *middleware.CSP {
	if !strings.HasPrefix(zitadelDomain, "*.") {
		zitadelDomain = "*." + zitadelDomain
	}
	csp := middleware.DefaultSCP
	csp.StyleSrc = csp.StyleSrc.AddInline().AddHost("fonts.googleapis.com").AddHost("maxst.icons8.com") //TODO: host it
	csp.FontSrc = csp.FontSrc.AddHost("fonts.gstatic.com").AddHost("maxst.icons8.com")                  //TODO: host it
	csp.ScriptSrc = csp.ScriptSrc.AddEval()
	csp.ConnectSrc = csp.ConnectSrc.AddHost(zitadelDomain).
		AddHost("fonts.googleapis.com").
		AddHost("fonts.gstatic.com").
		AddHost("maxst.icons8.com") //TODO: host it
	csp.ImgSrc = csp.ImgSrc.AddHost(zitadelDomain).AddScheme("blob")
	return &csp
}

func AssetsCacheInterceptorIgnoreManifest(shortMaxAge, shortSharedMaxAge, longMaxAge, longSharedMaxAge time.Duration) func(http.Handler) http.Handler {
	return func(handler http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			for _, file := range shortCacheFiles {
				if r.URL.Path == file {
					middleware.AssetsCacheInterceptor(shortMaxAge, shortSharedMaxAge, handler).ServeHTTP(w, r)
					return
				}
			}
			middleware.AssetsCacheInterceptor(longMaxAge, longSharedMaxAge, handler).ServeHTTP(w, r)
			return
		})
	}
}
