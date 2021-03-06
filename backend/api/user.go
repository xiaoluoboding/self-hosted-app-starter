package api

// Role is the type of a role.
type Role string

const (
	// Owner is the OWNER role.
	Owner Role = "OWNER"
	// NormalUser is the USER role.
	NormalUser Role = "USER"
)

func (e Role) String() string {
	switch e {
	case Owner:
		return "OWNER"
	case NormalUser:
		return "USER"
	}
	return "USER"
}

type User struct {
	ID int `json:"id"`

	// Standard fields
	CreatedTs int64 `json:"createdTs"`
	UpdatedTs int64 `json:"updatedTs"`

	// Domain specific fields
	Email        string `json:"email"`
	Role         Role   `json:"role"`
	Name         string `json:"name"`
	PasswordHash string `json:"-"`
}

type UserCreate struct {
	// Domain specific fields
	Email        string `json:"email"`
	Role         Role   `json:"role"`
	Name         string `json:"name"`
	Password     string `json:"password"`
	PasswordHash string
}

type UserDelete struct {
	ID int `json:"id"`
}

type UserPatch struct {
	ID int

	// Domain specific fields
	Email        *string `json:"email"`
	Name         *string `json:"name"`
	Password     *string `json:"password"`
	PasswordHash *string
}

type UserFind struct {
	ID *int `json:"id"`

	// Domain specific fields
	Email  *string `json:"email"`
	Role   *Role
	Name   *string `json:"name"`
}
