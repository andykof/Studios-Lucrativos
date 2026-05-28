/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  MapPin,
  Layout,
  Sparkles,
  TrendingUp,
  Leaf,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  Award,
  Users,
  MessageSquare,
  ArrowRight,
  Shield
} from 'lucide-react';

const iconMap = {
  MapPin: MapPin,
  Layout: Layout,
  Sparkles: Sparkles,
  TrendingUp: TrendingUp,
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
  Check: Check,
  Phone: Phone,
  Mail: Mail,
  Award: Award,
  Users: Users,
  MessageSquare: MessageSquare,
  ArrowRight: ArrowRight,
  Shield: Shield
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({ name, className = '', size = 24 }: DynamicIconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  if (!IconComponent) {
    return <Sparkles className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
}
