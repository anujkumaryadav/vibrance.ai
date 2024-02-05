import {CodeBracketIcon , MagnifyingGlassIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, DevicePhoneMobileIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import React from 'react'



const features = [
  {
    name: 'Web & App Development',
    description:
      'Transforming ideas into interactive realities. Expert web and app development services for a dynamic and user-centric online presence.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Search Engine Optimization',
    description:
      'Boost your visibility and rank high. Tailored SEO solutions for increased online reach, organic traffic, and top search engine rankings.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'UI-UX',
    description:
      'Elevate user experiences. Innovative UI/UX design that captivates, engages, and enhances digital interactions for a memorable and intuitive journey.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'AI-ML',
    description:
      'Empowering businesses with intelligence. Harness the potential of AI and ML for smart solutions, automation, and data-driven insights.',
    icon: CpuChipIcon,
  },
  
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Let's Innovate</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Come work with us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vibranceai Innovation, we build dreams we are innovators, we are developers.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}