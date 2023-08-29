import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function DrawTimeline({data}) {

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: "rgb(105, 108, 255)" }} />
                    <TimelineConnector sx={{ backgroundColor: '#eeeeee' }} />
                </TimelineSeparator>
                <TimelineContent className='timeline--box'>
                    <div>
                        <p className='timeline--box--title'>{data[0].title}</p>
                        <p>{data[0].content.desc}</p>
                        <div className='timeline--box--attachment'>
                            <img src={`/assets/timeline/${data[0].content.icon}`} alt={data[0].content.icon} style={{height: '30px'}}/>
                            <span>{data[0].content.attachment}</span>
                        </div>
                    </div>
                    <p>{data[0].timestamp}</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: "rgb(255, 171, 0)" }} />
                    <TimelineConnector sx={{ backgroundColor: '#eeeeee' }} />
                </TimelineSeparator>
                <TimelineContent className='timeline--box'>
                    <div>
                        <p className='timeline--box--title'>{data[1].title}</p>
                        <p>{data[1].content.desc}</p>
                        <div className='timeline--box--attachment'>
                            <Avatar src={`/assets/timeline/${data[1].content.members[0].icon}`} alt={data[1].content.members[0].icon} />
                            <span>
                                <p className='timeline--box--title'>{data[1].content.members[0].name}</p>
                                <p>{data[1].content.members[0].position}</p>
                            </span>
                        </div>
                    </div>
                    <p>{data[1].timestamp}</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator >
                    <TimelineDot sx={{ backgroundColor: "rgb(3, 195, 236)" }} />
                </TimelineSeparator>
                <TimelineContent className='timeline--box'>
                    <div>
                        <p className='timeline--box--title'>{data[2].title}</p>
                        <p>{data[2].content.desc}</p>
                        <div className='timeline--box--attachment'>
                            <AvatarGroup >
                                {data[2].content.members.map(item => {
                                    return <Avatar src={`/assets/timeline/${item.icon}`} alt={item.name} key={item.name}/>
                                })}
                            </AvatarGroup>
                        </div>
                    </div>
                    <p>{data[2].timestamp}</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}