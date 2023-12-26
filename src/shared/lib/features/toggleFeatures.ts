import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlags } from './setGetFeatures';

interface ToogleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toogleFeatures <T>({ name, on, off }: ToogleFeaturesOptions<T>) {
  if (getFeatureFlags(name)) {
    return on();
  }
  return off();
}
