'use client';

import { Theme, Content } from '@carbon/react';
import { ArrowDown } from '@carbon/icons-react';
import { useEffect, useState } from 'react';

import { MainHeader } from '@/components/MainHeader';
import { HeroSection } from '@/components/HeroSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { SpeakerModal } from '@/components/SpeakerModal';
import { FormattedWindow, Speaker } from '@/types';
import { formatData, getAllData } from '@/utils';
import { useLoading } from '@/hooks/use-loading';
import { Loader } from '@/components/Loader';
import { ScheduleSection } from '@/components/ScheduleSection';
import { VideoSection } from '@/components/VideoSection';

import styles from './page.module.scss';

const HomePage = () => {
	const [speakers, setSpeakers] = useState<Speaker[]>([]);
	const [windows, setWindows] = useState<FormattedWindow[]>([]);

	const { setLoading } = useLoading();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const data = await getAllData();

			setSpeakers(data.speakers);
			setWindows(formatData({ windows: data.windows, lectures: data.lectures, speakers: data.speakers }));
			setLoading(false);
		};
		fetchData();
	}, [setLoading]);

	return (
		<Theme theme='white'>
			<Loader />
			<main className={styles.main}>
				<MainHeader />
				<Content className={styles.content}>
					<HeroSection />
					<div className={styles.arrowRow}>
						<a href='#speakers'>
							<ArrowDown />
						</a>
					</div>
					<SpeakersSection speakers={speakers} />
					<ScheduleSection windows={windows} />
					<VideoSection />
				</Content>
				<SpeakerModal />
			</main>
		</Theme>
	);
};

export default HomePage;
