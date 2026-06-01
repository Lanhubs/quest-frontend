import { lazy } from 'react';
import type { ComponentType } from 'react';

type NavType = 'landing' | 'main';

interface RouteConfig {
  path: string;
  label: string;
  showInNav: boolean;
  navType?: NavType;
  isLazy: boolean;
  component?: ComponentType;
}

// Lazy load components for better performance
const SignIn = lazy(() => import('../pages/auth/SignIn'));
const AccountSettings = lazy(() => import('../components/AccountSettings'));
const LeaderboardPage = lazy(() => import('../pages/LeaderboardPage'));
const GetStarted = lazy(() => import('../pages/GetStarted'));
const Store = lazy(() => import('../pages/Store'));
const GameMode = lazy(() => import('../pages/GameMode'));

// Route configuration with metadata
// Note: Home component is defined inline in App.tsx, so it's not lazy-loaded
export const routeConfig: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    showInNav: true,
    navType: 'landing',
    isLazy: false,
  },
  {
    path: '/sign-in',
    component: SignIn,
    label: 'Sign In',
    showInNav: false,
    isLazy: true,
  },
  {
    path: '/settings',
    component: AccountSettings,
    label: 'Settings',
    showInNav: true,
    navType: 'main',
    isLazy: true,
  },
  {
    path: '/leaderboard',
    component: LeaderboardPage,
    label: 'Leaderboard',
    showInNav: false,
    isLazy: true,
  },
  {
    path: '/get-started',
    component: GetStarted,
    label: 'Get Started',
    showInNav: false,
    isLazy: true,
  },
  {
    path: '/store',
    component: Store,
    label: 'Store',
    showInNav: true,
    navType: 'main',
    isLazy: true,
  },
  {
    path: '/game-mode',
    component: GameMode,
    label: 'Game Mode',
    showInNav: true,
    navType: 'main',
    isLazy: true,
  },
];

// Helper to get navigation items by navbar type
export const getNavItems = (navType: NavType | 'both' = 'both') =>
  routeConfig.filter(
    (route) =>
      route.showInNav &&
      (navType === 'both' || route.navType === navType)
  );