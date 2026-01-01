import express from 'express';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Available plans
const plans = {
  free: {
    name: 'Free',
    price: 0,
    features: [
      'Up to 3 projects',
      'Basic analytics',
      'Community support',
      '1GB storage',
    ],
  },
  starter: {
    name: 'Starter',
    price: 9,
    features: [
      'Up to 10 projects',
      'Advanced analytics',
      'Email support',
      '10GB storage',
      'Custom domain',
    ],
  },
  professional: {
    name: 'Professional',
    price: 29,
    features: [
      'Unlimited projects',
      'Premium analytics',
      'Priority support',
      '100GB storage',
      'Custom domain',
      'API access',
      'Team collaboration',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    price: 99,
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'Audit logs',
    ],
  },
};

// @route   GET /api/subscription/plans
// @desc    Get available subscription plans
// @access  Public
router.get('/plans', (req, res) => {
  res.json(plans);
});

// @route   GET /api/subscription/current
// @desc    Get current user's subscription
// @access  Private
router.get('/current', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const currentPlan = plans[user.plan] || plans.free;

    res.json({
      plan: user.plan,
      ...currentPlan,
    });
  } catch (error) {
    console.error('Get subscription error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/subscription/upgrade
// @desc    Upgrade subscription plan
// @access  Private
router.put('/upgrade', protect, async (req, res) => {
  try {
    const { plan } = req.body;

    if (!plans[plan]) {
      return res.status(400).json({ message: 'Invalid plan' });
    }

    const user = await User.findById(req.user.id);

    // TODO: Integrate with payment provider (e.g., Stripe) for production use
    // Current implementation updates plan directly for demonstration purposes
    user.plan = plan;
    await user.save();

    res.json({
      message: 'Plan upgraded successfully',
      plan: user.plan,
      ...plans[user.plan],
    });
  } catch (error) {
    console.error('Upgrade subscription error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
