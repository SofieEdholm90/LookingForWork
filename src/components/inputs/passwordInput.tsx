import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const PasswordInput = () => {
	return (
		<>
			<br />
			Detta är i password input filen
			<Box
				component='form'
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' },
				}}
				noValidate
				autoComplete='off'
			>
				<TextField id='outlined-basic' label='Outlined' variant='outlined' />
				<TextField id='filled-basic' label='Filled' variant='filled' />
				<TextField id='standard-basic' label='Standard' variant='standard' />
			</Box>
		</>
	)
}

export default PasswordInput
