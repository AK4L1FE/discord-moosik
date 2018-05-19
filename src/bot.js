'use babel';
'use strict';

import { Bot } from 'discord-graf';
import { stripIndents } from 'common-tags';
import version from './version';

export default new Bot({
	name: 'Beats',
	version: version,
	about: stripIndents`
		**Beats** v${version} created AK4L1FE.
	`,
	clientOptions: { disable_everyone: true } // eslint-disable-line camelcase
});
