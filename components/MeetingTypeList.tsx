"use client"
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation';
import MeetingModal from './MeetingModal';

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<"isSceduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined>(undefined);
    const router = useRouter();
    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            <HomeCard 
                className='bg-orange-500' 
                title='Add Meeting' 
                description='Start an instant meeting' 
                image="/icons/add-meeting.svg" 
                handleClick={() => setMeetingState("isInstantMeeting")}
            />
            <HomeCard 
                className='bg-blue-600' 
                title='Schedule Meeting' 
                description='Plan your meeting' 
                image="/icons/schedule.svg" 
                handleClick={() => setMeetingState("isSceduleMeeting")}
            />
            <HomeCard 
                className='bg-green-600' 
                title='View Recording' 
                description='View Recordings' 
                image="/icons/recordings.svg" 
                handleClick={() => router.push("/recordings")}
            />
            <HomeCard 
                className='bg-purple-600' 
                title='Join Meeting' 
                description='Via Meeting Link' 
                image="/icons/join-meeting.svg" 
                handleClick={() => setMeetingState("isJoiningMeeting")}
            />
            <MeetingModal
                isOpen={meetingState == "isJoiningMeeting"}
                onClose={() => setMeetingState(undefined)}
                handleClick={() => {}}
                title='Joining Meeting'
                textButton='Joining Button'
            >
                <div className="flex flex-col">

                </div>
            </MeetingModal>
        </section>
    )
}

export default MeetingTypeList