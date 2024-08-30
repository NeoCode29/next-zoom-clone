import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './ui/button';

interface MeetingModalProps{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children?: ReactNode;
    className?:  string;
    handleClick: () => void;
    textButton: string; 
}

const MeetingModal = ({isOpen,onClose,children,title,textButton,handleClick} : MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='bg-dark-1 border-none text-white flex flex-col'>
            <h2 className='text-center capitalize text-3xl font-bold'>{title}</h2>
            <div className="flex flex-col">
                {children}
            </div>
            <Button onClick={handleClick} className='bg-blue-600 hover:bg-blue-500'>{textButton}</Button>
        </DialogContent>
    </Dialog>
  )
}

export default MeetingModal