export interface CardProps {
    title: string
    content: string
}
export interface PostData {
    title: string
    content: string
}
export interface PostModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (post: PostData) => void
}
export interface ButtonProps {
    size: 'small' | 'medium' | 'large'
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
    content: string
}