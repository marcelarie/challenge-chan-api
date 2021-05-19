import { Router } from 'express'
import * as SearchMethods from '../controllers/search/index.js'

const searchRouter = Router()

searchRouter.get('/:search', SearchMethods.searchByParams)

export default searchRouter
