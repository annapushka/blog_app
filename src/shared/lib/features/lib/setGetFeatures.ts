import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/theme';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatureFlags: FeatureFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlags = {
  ...defaultFeatureFlags,
};

export function setFeatureFlags(flags?: FeatureFlags) {
  if (flags) {
    featureFlags = flags;
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
