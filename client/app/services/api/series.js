import axios from 'axios';

const getSeries = () => axios.get('https://seriesexample.azurewebsites.net/api/series');
const getSerieById = (id) => axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`);
const searchSeriesByTitle = (title) => axios.get(`https://seriesexample.azurewebsites.net/api/series?title=${title}`);

export { getSeries, searchSeriesByTitle, getSerieById };