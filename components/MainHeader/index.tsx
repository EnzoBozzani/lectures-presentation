'use client';

import { MouseEventHandler } from 'react';
import {
	Header,
	HeaderContainer,
	HeaderGlobalAction,
	HeaderGlobalBar,
	HeaderMenuButton,
	HeaderMenuItem,
	HeaderName,
	HeaderNavigation,
	HeaderSideNavItems,
	SideNav,
	SideNavItems,
	Theme,
} from '@carbon/react';
import { signOut } from 'next-auth/react';
import { Logout } from '@carbon/icons-react';

import styles from './styles.module.scss';

export const MainHeader = () => {
	return (
		<Theme theme='g100'>
			<HeaderContainer
				render={({
					isSideNavExpanded,
					onClickSideNavExpand,
				}: {
					isSideNavExpanded: boolean;
					onClickSideNavExpand: MouseEventHandler<HTMLButtonElement>;
				}) => (
					<Header
						className='dark-theme'
						aria-label='IBM Research Colóquio 2023'
					>
						<HeaderMenuButton
							aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
							onClick={onClickSideNavExpand}
							isActive={isSideNavExpanded}
							aria-expanded={isSideNavExpanded}
						/>
						<HeaderName
							href='#'
							prefix='IBM Research'
						>
							Colóquio 2023
						</HeaderName>
						<HeaderNavigation aria-label='IBM Research Colóquio 2023'>
							<HeaderMenuItem href='#speakers'>Convidados</HeaderMenuItem>
							<HeaderMenuItem href='#schedule'>Agenda</HeaderMenuItem>
							<HeaderMenuItem
								target='_blank'
								href='https://research.ibm.com/labs/brazil'
							>
								Mais sobre nós
							</HeaderMenuItem>
						</HeaderNavigation>
						<HeaderGlobalBar>
							<HeaderGlobalAction
								aria-label='Sign Out'
								onClick={() => signOut()}
							>
								<Logout className={styles.signOut} />
							</HeaderGlobalAction>
						</HeaderGlobalBar>
						<SideNav
							aria-label='Side navigation'
							expanded={isSideNavExpanded}
							isPersistent={false}
						>
							<SideNavItems>
								<HeaderSideNavItems>
									<HeaderMenuItem href='#speakers'>Convidados</HeaderMenuItem>
									<HeaderMenuItem href='#schedule'>Agenda</HeaderMenuItem>
									<HeaderMenuItem href='https://research.ibm.com/labs/brazil'>
										Mais sobre nós
									</HeaderMenuItem>
								</HeaderSideNavItems>
							</SideNavItems>
						</SideNav>
					</Header>
				)}
			/>
		</Theme>
	);
};
