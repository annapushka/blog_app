import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(flags?: FeatureFlags) {
  if (flags) {
    featureFlags = flags;
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags?.[flag];
}
