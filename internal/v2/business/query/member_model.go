package query

import (
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/v2/repository/member"
)

//MemberReadModel represenets the default member view.
// It's computed from events.
type MemberReadModel struct {
	eventstore.ReadModel

	UserID string
	Roles  []string
}

//NewMemberReadModel is the default constructor of MemberReadModel
func NewMemberReadModel(userID string) *MemberReadModel {
	return &MemberReadModel{
		UserID: userID,
	}
}

//Reduce extends eventstore.MemberReadModel
func (rm *MemberReadModel) Reduce() error {
	for _, event := range rm.Events {
		switch e := event.(type) {
		case *member.MemberAddedEvent:
			rm.Roles = e.Roles
		case *member.ChangedEvent:
			rm.Roles = e.Roles
		}
	}
	return rm.ReadModel.Reduce()
}