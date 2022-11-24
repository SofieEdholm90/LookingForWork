import PasswordInput from '../../components/inputs/passwordInput'

interface LoginProps {
	name: string
}

const LoginPage = ({ name }: LoginProps) => {
	return (
		<>
			<span>
				Detta är i pages/loginPage/index.tsx filen: Login page, välkommen, {name},
				ha ett bra besök!
			</span>
			<PasswordInput />
		</>
	)
}

export default LoginPage
