import { FETCH_DATA } from './types'
import mockData from '../components/carousel/testdata'

export const carouselClickHandler = (active) => ({
    type: 'carouselClickHandler',
    active
});

export const fetchData = () => ({
    type: 'FETCH_DATA',
    payload: mockData
});