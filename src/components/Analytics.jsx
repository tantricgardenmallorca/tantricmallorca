import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_ID, initAnalytics, trackPageView } from '../data/analytics.js';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}
