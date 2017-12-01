import axios from 'axios';

const getSeries = () => axios.get('./series.json');

export { getSeries };