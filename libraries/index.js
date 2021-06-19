import { useRef, useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme, ThemeProvider } from 'next-themes'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { DefaultSeo, NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Reward from 'react-rewards'
import Portal from '@reach/portal'
import Ticker from 'react-ticker'
import NumberFormat from 'react-number-format'

export {
  useRef,
  useState,
  useEffect,
  useMemo,
  dynamic,
  Image,
  Link,
  useTheme,
  useRouter,
  cn,
  motion,
  NProgress,
  DefaultSeo,
  NextSeo,
  ThemeProvider,
  Reward,
  Portal,
  Ticker,
  NumberFormat
}