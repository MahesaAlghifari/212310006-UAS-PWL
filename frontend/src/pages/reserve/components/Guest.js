'use client'

import { useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const guests = [
  {
    id: 1,
    name: '1 Guest',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // ... other guests
  {
    id: 10,
    name: '2 Guest',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const dates = [
  { id: 1, date: '2024-07-14' },
  { id: 2, date: '2024-07-15' },
  // ... other dates
]

const times = [
  { id: 1, time: '18:00' },
  { id: 2, time: '19:00' },
  // ... other times
]

export default function Reservation() {
  const [selectedGuest, setSelectedGuest] = useState(guests[0])
  const [selectedDate, setSelectedDate] = useState(dates[0])
  const [selectedTime, setSelectedTime] = useState(times[0])

  return (
    <div className="flex space-x-4">
      <div className="w-1/3">
        <label className="block text-sm font-medium leading-6 text-gray-900">Date</label>
        <Listbox value={selectedDate} onChange={setSelectedDate}>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="block truncate">{selectedDate.date}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {dates.map((date) => (
                <ListboxOption
                  key={date.id}
                  value={date}
                  className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                >
                  <span className="block truncate">{date.date}</span>
                  {selectedDate === date ? (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 hover:text-white">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div className="w-1/3">
        <label className="block text-sm font-medium leading-6 text-gray-900">Time</label>
        <Listbox value={selectedTime} onChange={setSelectedTime}>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="block truncate">{selectedTime.time}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {times.map((time) => (
                <ListboxOption
                  key={time.id}
                  value={time}
                  className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                >
                  <span className="block truncate">{time.time}</span>
                  {selectedTime === time ? (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 hover:text-white">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <div className="w-1/3">
        <label className="block text-sm font-medium leading-6 text-gray-900">Guest</label>
        <Listbox value={selectedGuest} onChange={setSelectedGuest}>
          <div className="relative mt-2">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img alt="" src={selectedGuest.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selectedGuest.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </span>
            </ListboxButton>
            <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {guests.map((guest) => (
                <ListboxOption
                  key={guest.id}
                  value={guest}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                >
                  <div className="flex items-center">
                    <img alt="" src={guest.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                      {guest.name}
                    </span>
                  </div>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  )
}
