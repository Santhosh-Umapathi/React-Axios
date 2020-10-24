import Axios from 'axios'

const instance = Axios.create({
	baseURL:'https://jsonplaceholder.typicode.com',
	headers:
	{
		'Authorization': "New AUTH TOKEN"
	}
})

instance.defaults.headers.common['Content-Type'] = "text/xml"

export default instance