package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAchievement{}

func NewMsgCreateAchievement(creator string, achievementID string, owner string) *MsgCreateAchievement {
	return &MsgCreateAchievement{
		Creator:       creator,
		AchievementID: achievementID,
		Owner:         owner,
	}
}

func (msg *MsgCreateAchievement) Route() string {
	return RouterKey
}

func (msg *MsgCreateAchievement) Type() string {
	return "CreateAchievement"
}

func (msg *MsgCreateAchievement) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAchievement) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAchievement) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAchievement{}

func NewMsgUpdateAchievement(creator string, id uint64, achievementID string, owner string, createdAt int32) *MsgUpdateAchievement {
	return &MsgUpdateAchievement{
		Id:            id,
		Creator:       creator,
		AchievementID: achievementID,
		Owner:         owner,
		CreatedAt:     createdAt,
	}
}

func (msg *MsgUpdateAchievement) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAchievement) Type() string {
	return "UpdateAchievement"
}

func (msg *MsgUpdateAchievement) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAchievement) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAchievement) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteAchievement{}

func NewMsgDeleteAchievement(creator string, id uint64) *MsgDeleteAchievement {
	return &MsgDeleteAchievement{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAchievement) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAchievement) Type() string {
	return "DeleteAchievement"
}

func (msg *MsgDeleteAchievement) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAchievement) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAchievement) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
