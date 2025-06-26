export interface IUser {
  name?: string
  email: string
  password: string
  password_confirmation?: string
}

export interface IFormData {
  title: string
  body: string
}

export interface IPost {
  body: string
  created_at: string
  id: number
  title: string
  updated_at: string
  user: {
    created_at: string
    email: string
    email_verified_at: string | null
    id: number
    name: string
    updated_at: string
  }
  user_id: number
}
