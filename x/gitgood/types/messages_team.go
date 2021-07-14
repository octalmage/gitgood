package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTeam{}

func NewMsgCreateTeam(creator string, name string, users string) *MsgCreateTeam {
	return &MsgCreateTeam{
		Creator: creator,
		Name:    name,
		Users:   users,
	}
}

func (msg *MsgCreateTeam) Route() string {
	return RouterKey
}

func (msg *MsgCreateTeam) Type() string {
	return "CreateTeam"
}

func (msg *MsgCreateTeam) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTeam) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTeam) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTeam{}

func NewMsgUpdateTeam(creator string, id uint64, name string, users string) *MsgUpdateTeam {
	return &MsgUpdateTeam{
		Id:      id,
		Creator: creator,
		Name:    name,
		Users:   users,
	}
}

func (msg *MsgUpdateTeam) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTeam) Type() string {
	return "UpdateTeam"
}

func (msg *MsgUpdateTeam) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTeam) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTeam) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTeam{}

func NewMsgDeleteTeam(creator string, id uint64) *MsgDeleteTeam {
	return &MsgDeleteTeam{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTeam) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTeam) Type() string {
	return "DeleteTeam"
}

func (msg *MsgDeleteTeam) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTeam) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTeam) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
