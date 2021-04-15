import common from './common'
import emails from './emails'
import enrollment from './enrollment'
import legal from './legal'
import feed from './feed'
import feedback from './feedback'
import form from './form'
import pm from './pm'
import settings from './settings'
import sharing from './sharing'
import comments from './comments'
import users from './user'
import pages from './pages'

export default {
  locales: ['ja', 'ja-JP'],
  ...common,
  ...emails,
  ...enrollment,
  ...feed,
  ...feedback,
  ...form,
  ...pm,
  ...settings,
  ...sharing,
  ...comments,
  ...legal,
  ...pages,
  ...users
}
