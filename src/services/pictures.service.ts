import axios from 'axios';

class PicturesService {
    private URL = 'https://api.unsplash.com'
    private KEY = import.meta.env.VITE_API_ACCESS_KEY

    // TODO: show random pictures each 10s;
    async getRandomPic() {
        return (await axios.get(`${this.URL}/photos/?client_id=${this.KEY}`)).data;
    }

    async getByNamePics(input: string, page: number | string) {
        return (await axios.get(`${this.URL}/search/photos?page=${page}&per_page=30&query=${input}&client_id=${this.KEY}`)).data
    }
}

export default new PicturesService();