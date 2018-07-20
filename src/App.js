import React, { Component } from 'react';
import Card from './Card'
import './App.css';

const categories = [
  {
    id: 1,
    title: "ASMR",
    channels: [
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
      {
        id: 5,
        title: "ASMR 채널",
        view_count: 10000,
        subscriber_count: 1383010,
        comment_count: 100,
        thumbnail_url: "https://lh3.googleusercontent.com/a-/ACSszfHiacAB0bHSdTJ7i4O1C589LpUs26R9iDkZcg=s176-c-k-c0x00ffffff-no-rj-mo",
        description: "ASMR이 업로드되는 뽀모 ASMR 채널입니다. :) 귀청소, 마사지, 입소리, 탭핑, 롤플레이등 여러가지 ASMR를 업로드하고있어요! https://www.twitch.tv/ppomodoli * 매주 생방송: 유튜브에서 금요일 23시~24시 - 이어서 트위치에서 토요일 0시~3시 트위치에서 토요일 게임방송 21시~24시 - 티타임 ASMR 라디오 일요일 0시~2시",
        videos: [
          {
            id: 100,
            title: "ASMR Relaxing Ｂａｔｈ  Ｔｉｍｅ 😌 목욕시간",
            view_count: 421062,
            comment_count: 10,
            like_count: 14011,
            dislike_count: 232
          },
          {
            id: 101,
            title: "ASMR Ear Cleaning, Massage and Head Scratching with Fingers (ง •̀_•́)ง 맨손귀청소",
            view_count: 1793700,
            comment_count: 80,
            like_count: 6
          }
        ]
      },
    ]
  },
]
function chunkArray(myArray, chunk_size) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}


class App extends Component {
  render() {
    return (
      <div>
        {
          chunkArray(categories[0].channels, 3).map((channels, idx) => 
            <div style={{ display: "flex", margin: '0 10%', justifyContent: 'center' }} key={idx}>
              {channels.map((channel, idx) => 
                <div style={{ margin: '20px' }} key={idx}>
                  <Card channel={channel}/>
                </div>
              )}
            </div>
        )
      }
      </div>
      
    );
  }
}

export default App;
