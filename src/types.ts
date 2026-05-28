/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  propertyInterest?: string;
  status: 'new' | 'contacted';
}

export interface PropertyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Property {
  id: string;
  title: string;
  tagline: string;
  neighborhood: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  features: PropertyFeature[];
  sizeRange: string;
  images: string[];
  whatsappText: string;
  tourUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
