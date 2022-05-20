package api

import "sha/backend/common"

type SystemStatus struct {
	Owner   *User           `json:"owner"`
	Profile *common.Profile `json:"profile"`
}
