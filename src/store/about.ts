import { Store } from '../core/heropy'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}



export default new Store<State>({
  photo: 'https://lh3.googleusercontent.com/a/ACg8ocIRvamEZfir7rlQ7llx1Q0u5wIg5OHoUjOanaahNSfCbcfkyzrk=s288-c-no',
  name: 'Peterkkhan / Jeonha Kang',
  email: 'juna08@naver.com',
  blog: 'https://x.com/peterkkhan',
  github: 'https://github.com/peterkkhan/',
  repository: 'https://github.com/peterkkhan/movie-app'

})