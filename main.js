#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'
import { checkFileExistence } from './utils/checkFileExistence.js'
import { router } from './router.js'
import { config } from './config.js'


const args = process.argv.slice(2)


checkFileExistence(config.dataFile)

router(args, config.dataFile)
