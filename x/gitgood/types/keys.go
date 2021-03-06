package types

const (
	// ModuleName defines the module name
	ModuleName = "gitgood"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_gitgood"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	TeamKey      = "Team-value-"
	TeamCountKey = "Team-count-"
)

const (
	StatKey      = "Stat-value-"
	StatCountKey = "Stat-count-"
)

const (
	GoalKey      = "Goal-value-"
	GoalCountKey = "Goal-count-"
)

const (
	AchievementKey      = "Achievement-value-"
	AchievementCountKey = "Achievement-count-"
)
