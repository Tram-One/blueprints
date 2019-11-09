import { useState } from 'tram-one'

export default () => {
	const [value, setter] = useState(true)
	return value
}
