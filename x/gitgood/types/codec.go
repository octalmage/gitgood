package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateStat{}, "gitgood/CreateStat", nil)
	cdc.RegisterConcrete(&MsgUpdateStat{}, "gitgood/UpdateStat", nil)
	cdc.RegisterConcrete(&MsgDeleteStat{}, "gitgood/DeleteStat", nil)

	cdc.RegisterConcrete(&MsgCreateTeam{}, "gitgood/CreateTeam", nil)
	cdc.RegisterConcrete(&MsgUpdateTeam{}, "gitgood/UpdateTeam", nil)
	cdc.RegisterConcrete(&MsgDeleteTeam{}, "gitgood/DeleteTeam", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateStat{},
		&MsgUpdateStat{},
		&MsgDeleteStat{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTeam{},
		&MsgUpdateTeam{},
		&MsgDeleteTeam{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
