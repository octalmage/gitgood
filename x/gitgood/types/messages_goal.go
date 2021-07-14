package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateGoal{}

func NewMsgCreateGoal(creator string, label string, comparison int32, exp int32) *MsgCreateGoal {
	return &MsgCreateGoal{
		Creator:    creator,
		Label:      label,
		Comparison: comparison,
		Exp:        exp,
	}
}

func (msg *MsgCreateGoal) Route() string {
	return RouterKey
}

func (msg *MsgCreateGoal) Type() string {
	return "CreateGoal"
}

func (msg *MsgCreateGoal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateGoal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateGoal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateGoal{}

func NewMsgUpdateGoal(creator string, id uint64, label string, comparison int32, exp int32, createdAt int32) *MsgUpdateGoal {
	return &MsgUpdateGoal{
		Id:         id,
		Creator:    creator,
		Label:      label,
		Comparison: comparison,
		Exp:        exp,
		CreatedAt:  createdAt,
	}
}

func (msg *MsgUpdateGoal) Route() string {
	return RouterKey
}

func (msg *MsgUpdateGoal) Type() string {
	return "UpdateGoal"
}

func (msg *MsgUpdateGoal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateGoal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateGoal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteGoal{}

func NewMsgDeleteGoal(creator string, id uint64) *MsgDeleteGoal {
	return &MsgDeleteGoal{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteGoal) Route() string {
	return RouterKey
}

func (msg *MsgDeleteGoal) Type() string {
	return "DeleteGoal"
}

func (msg *MsgDeleteGoal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteGoal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteGoal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
