package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateStat{}

func NewMsgCreateStat(creator string, statType int32, initial int32, final int32, owner string) *MsgCreateStat {
	return &MsgCreateStat{
		Creator:  creator,
		StatType: statType,
		Initial:  initial,
		Final:    final,
		Owner:    owner,
	}
}

func (msg *MsgCreateStat) Route() string {
	return RouterKey
}

func (msg *MsgCreateStat) Type() string {
	return "CreateStat"
}

func (msg *MsgCreateStat) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateStat) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateStat) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateStat{}

func NewMsgUpdateStat(creator string, id uint64, statType int32, initial int32, final int32, owner string) *MsgUpdateStat {
	return &MsgUpdateStat{
		Id:       id,
		Creator:  creator,
		StatType: statType,
		Initial:  initial,
		Final:    final,
		Owner:    owner,
	}
}

func (msg *MsgUpdateStat) Route() string {
	return RouterKey
}

func (msg *MsgUpdateStat) Type() string {
	return "UpdateStat"
}

func (msg *MsgUpdateStat) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateStat) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateStat) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteStat{}

func NewMsgDeleteStat(creator string, id uint64) *MsgDeleteStat {
	return &MsgDeleteStat{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteStat) Route() string {
	return RouterKey
}

func (msg *MsgDeleteStat) Type() string {
	return "DeleteStat"
}

func (msg *MsgDeleteStat) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteStat) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteStat) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
