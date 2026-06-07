/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Single source of truth for the site's identity and links. Every value here is
 * constrained to publicly verifiable facts (GitHub, ORCID, Medium, kernelguard.net).
 */

export const SITE = {
  url: 'https://erenari.com',
  name: 'Eren Arı',
  role: 'Founder & Lead Engineer, KernelGuard',
  email: 'erenari27@gmail.com',
} as const;

export const LINKS = {
  // Personal
  github: 'https://github.com/ErenAri',
  linkedin: 'https://www.linkedin.com/in/eren-ari',
  medium: 'https://medium.com/@erenari27',
  x: 'https://x.com/ErenAri27',
  orcid: 'https://orcid.org/0009-0002-9417-955X',
  // KernelGuard — the studio
  kernelguard: 'https://kernelguard.net',
  kernelguardLinkedin: 'https://www.linkedin.com/company/kernel-guard',
  kernelguardGithub: 'https://github.com/Kernel-Guard',
} as const;
