package command

import (
	"github.com/caos/zitadel/internal/eventstore/v2"
	"github.com/caos/zitadel/internal/v2/repository/iam"
)

type IAMLabelPolicyWriteModel struct {
	LabelPolicyWriteModel
}

func NewIAMLabelPolicyWriteModel(iamID string) *IAMLabelPolicyWriteModel {
	return &IAMLabelPolicyWriteModel{
		LabelPolicyWriteModel{
			WriteModel: eventstore.WriteModel{
				AggregateID: iamID,
			},
		},
	}
}

func (wm *IAMLabelPolicyWriteModel) AppendEvents(events ...eventstore.EventReader) {
	for _, event := range events {
		switch e := event.(type) {
		case *iam.LabelPolicyAddedEvent:
			wm.LabelPolicyWriteModel.AppendEvents(&e.LabelPolicyAddedEvent)
		case *iam.LabelPolicyChangedEvent:
			wm.LabelPolicyWriteModel.AppendEvents(&e.LabelPolicyChangedEvent)
		}
	}
}

func (wm *IAMLabelPolicyWriteModel) Reduce() error {
	return wm.LabelPolicyWriteModel.Reduce()
}

func (wm *IAMLabelPolicyWriteModel) Query() *eventstore.SearchQueryBuilder {
	return eventstore.NewSearchQueryBuilder(eventstore.ColumnsEvent, iam.AggregateType).
		AggregateIDs(wm.LabelPolicyWriteModel.AggregateID)
}

func (wm *IAMLabelPolicyWriteModel) HasChanged(primaryColor, secondaryColor string) bool {
	if primaryColor != "" && wm.PrimaryColor != primaryColor {
		return true
	}
	if secondaryColor != "" && wm.SecondaryColor != secondaryColor {
		return true
	}
	return false
}
