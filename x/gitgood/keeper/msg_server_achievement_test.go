package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/octalmage/gitgood/x/gitgood/types"
)

func TestAchievementMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateAchievement(ctx, &types.MsgCreateAchievement{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestAchievementMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateAchievement
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateAchievement{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateAchievement{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateAchievement{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateAchievement(ctx, &types.MsgCreateAchievement{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateAchievement(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestAchievementMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteAchievement
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteAchievement{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteAchievement{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteAchievement{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateAchievement(ctx, &types.MsgCreateAchievement{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteAchievement(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
