import { LoginModal } from "./LoginModal"
import { CreatePostModal } from "./posts/CreatePostModal"
import { SignupModal } from "./SignUpModal"

export * from "./posts/"

export const Modals = () => {
    return (
        <>
            <CreatePostModal />
            <LoginModal />
            <SignupModal />
        </>
    )
}
