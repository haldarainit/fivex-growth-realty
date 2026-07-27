import {
  ProjectItem,
  UpcomingProjectItem,
  CompletedProjectItem,
} from '@/types';

export const ongoingProjects: ProjectItem[] = [
  {
    id: 'proj-aurelius',
    title: 'Aurelius Sky Gardens',
    location: 'Downtown Financial District',
    startingPrice: 'Starting $2.4M',
    yieldText: '6.8% Expected Yield',
    description:
      'Ultra-luxury residences featuring private infinity pools, smart-home automation, and 360-degree panoramic skyline views.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC44CbuQhJBfDlD5pyqlVEaMUMpyGqPH3z6aSKcjdEiMkaTTDrI0EMxLhDW0RqDR6Tvj3bocOLIndRI0s40QUzsltcQDJdVDsOh1hSrgoPY-IWY_tVAVYqYENf4EANseeO3CVDvL3dOiZ-RkMYwEn0FKMyb2F8PySNNu9k7oMMtUws1_MA-Ismj5vnYV5TtK3Lk01jJI73jpzP78BOMimgNI0SFLaDEG3S4SYC3PMQT3iORedS74ZNPFmSFXeUFvr5-hqb3UF4lqnJv',
    imageAlt: 'Modern glass skyscraper at golden sunset',
    badges: [
      {
        label: 'Hot Investment',
        style: 'bg-secondary-container text-on-secondary-container',
      },
      {
        label: 'Ongoing',
        style: 'bg-primary/80 backdrop-blur-md text-white',
      },
    ],
  },
  {
    id: 'proj-cove',
    title: 'Cove Serenity Villas',
    location: 'Azure Coastline',
    startingPrice: 'Starting $5.1M',
    yieldText: 'Beachfront Asset',
    description:
      'Exclusive gated community with private beach access and personalized concierge services for the global elite.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChwWJ_8XrkDqkV_ZidVT4RcxnN1YaWxVJjnQi9CM8dPNsxuXyTSOvGVpZgpnpYvhlC58A4VPxUD1Te8pmS6yoD8369TdkWlQC3Nfy0oMifOQ70miysjhGwxKaQBBoFG7SK7yvk3es2G4chzvmim0thZWQKmrGhX6wLCZgHhvKg62rcb7Rpbqfr9obFnA9AV1PGn2w-v0w-oWM8P1DecZAYVMvxWdJJgddzIOis-dzxqDp1xhxpC7vFwZQiqvpT-p4je75CZkGM3Af4',
    imageAlt: 'Coastal villa development on white cliffs',
    badges: [
      {
        label: 'Limited Release',
        style: 'bg-secondary-container text-on-secondary-container',
      },
      {
        label: 'Ongoing',
        style: 'bg-primary/80 backdrop-blur-md text-white',
      },
    ],
  },
];

export const upcomingProjects: UpcomingProjectItem[] = [
  {
    id: 'up-zenith',
    title: 'The Zenith Pavilion',
    subtitle: 'Waitlist Now Open • Q4 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClfbqM8Vy4HmfEBffuOgqmyE3WuVIByY6MTofhhl4O8YY-wQSD9weCN6a5m5SuLoW1qwiQsQ1MmF_e6-fCarPZARI8I-cJXxKa762BuZh-Otuh6Yp3qrbKZxJ2dVkNPUAW8AYAOX0p1tjn4abVS0JJ6owN4QYPQSpu9Q5pwMlF9a3cbG2NIefhQ-7ssrswrPgATdcrhB4zRDMfKWoxg_MieoFXK0i1RRZYom20hOWTDEeQcLRt1gFz8oXvOFeQHmzJ0CpLd5fjvA3j',
    imageAlt: 'Futuristic architectural building facade',
    badge: {
      label: 'New Launch',
      style: 'bg-tertiary text-on-tertiary',
    },
  },
  {
    id: 'up-verdant',
    title: 'Verdant Retreats',
    subtitle: 'Launching Q1 2026',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8qRgMot3eXBPhi_9hoHUg2vlVH3Mk2MWg09Yr8bv_vt6AgiJ3SBrBwDRMUt-bAsaWUbiZdujbmAP5CSZDbPXLrb1Mg8aRKmAXh7YRixBSEerzwMlytJEiMaIPtibSqX7ZL8k7EULrTDVKRulRWwn-JiDKd1jgltkhhZlIkm6JTTvKGyOmVhXlYQXMKaMzan4gFBceTSrHKXt-z6GBwSu_cG6VSQl1B6InjgQgiczOyz6xxXy96Qe4S6_GnTxLtE5hBO9URRQoux7J',
    imageAlt: 'Eco-friendly luxury residential complex',
    badge: {
      label: 'Priority Access',
      style: 'bg-tertiary text-on-tertiary',
    },
  },
  {
    id: 'up-cyber',
    title: 'Cyber-Port Residences',
    subtitle: 'Launch Event May 2025',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDThS4mNZNIzybEYdY6wPe7Mn7gPZHtpUUsb5jVQNtfXNz0m82NORjTvuczzSUZl_EXAvJttH898Qo-Z-9Sz69QXwdcFpIqnq8E4n_EGdKFYoMpa0Is461gKJ0rVz8oddgvs-Y90QPYN7frF5Evy0dONyzZOCZO7ujW6zWVd0jabKi88_0469YWotijWHvHf_pftOJnK52apaz64xxNdkQRu3Nm7he924l5yWziemfBLCz4sb_rNJLUIPNDrCxeCkpm3m2jUMyWt47q',
    imageAlt: 'Smart-city residential tower render',
    badge: {
      label: 'Concept Reveal',
      style: 'bg-tertiary text-on-tertiary',
    },
  },
];

export const completedProjects: CompletedProjectItem[] = [
  {
    id: 'comp-harbor',
    title: 'The Harbor Crown',
    completedYear: 'Completed 2023',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMVFnTdsDzaoKrWm32hps3TPXNCwgcPtAz_zQXgdEYMvyo45TLo2pEiOL59t573RgieFKpxZDUwq2eNHjTJm8v_aTdQhQH1cP54Q_PJlSu4Skdfslxvw2zK8aArg3XmkQcCI6A-AYhnRvihmYPyH_FZfAz9sywND2-hjbzZLEUESyI4HWLHPqPKN94sAn4rEHeBCS7Xvg_6X7QZUhiOVkBmirBx6QDQLpZfyAgzLqif0SxikwGK4_vTWxkKvFmq_aBXEBh_YMpdJCz',
    imageAlt: 'Finished luxury penthouse interior',
  },
  {
    id: 'comp-luminary',
    title: 'Luminary Plaza',
    completedYear: 'Completed 2022',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_PrtX6oqieBpwww9-J_0iRIdsrS1ejo78CJKibLKI4BrbqEXncf9DWwx8Ip7Khvowaxx2ifnAlzkFXCMhI_c4VsqeJaxykFn-TMc6uIL9ob7rNTvRJB5lHDrPovsmk8jo1XYYGbVxP1Dzh2jGnfGa3YBLlG6CDcGCdEOJRyUu36tUHP9VEAbT9iiLCK5BEJ3KQPK6-MLfZ1jJnXhBJzxFHfmT3GxEN0WslR207KdGHmY216uj3bZunR3g1pnD6BYFw56-7xjFY-Ie',
    imageAlt: 'Night shot of luxury commercial plaza',
  },
  {
    id: 'comp-apex',
    title: 'Apex HQ',
    completedYear: 'Completed 2022',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPegelGJ70c5i9AkZlOrsxMgYhf-OEW7QMyoK6xdCw0TWUvJs8fMVxNuUw-wQi5NeS-2OkQQYGFBdVHkmO2aOvmqVDROy1iZKD6iro0F8qE0steeYIRmpf3CRBhlUA2MlomBSGuJ83GsWVqUkDKbGi4tM3x-ppAFnD3v9-laQIdD3AG_xKxIFpUaSspmIYcx80ifqueTw6TRYNL4jY9PwzPUSFpfowM2dXVR8gudhv3WrY4gs5x1mUcuXcsAYrrWwPjsbXje35cIQe',
    imageAlt: 'Minimalist corporate office headquarters',
  },
  {
    id: 'comp-serene',
    title: 'Serene Horizon',
    completedYear: 'Completed 2021',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5JaE24MJYG344KYudLJuyBnbESQ1jaxDMFFSOYECjyuGTW-24K-nzGY8DppEDHr6nI1VOqrAvolfuDONsIO0I4CaQbVCyVkEJYGp-3iIh4tYsA06Pthf4BSvzPFRTUN2ABgsDt-HC6AY8xTFiB6u6Pp4rAGAYp3P00mHojIsb5elvxTGTosSoiHfyXekPO7eKQYtDHfIC5a-IK548gifRY63jyctpY3Gp_lH4X-D3MKFs_b1ageuhP8x4KFAJTHxYJtlKWoi7Mr_8',
    imageAlt: 'Luxury resort residential complex',
  },
];
