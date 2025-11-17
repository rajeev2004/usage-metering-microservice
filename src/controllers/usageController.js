import {
  recordUsageService,
  getUsageSummaryService,
} from "../services/usageService.js";
export const recordUsage = (req, res) => {
  const { customer_id, event_type, units } = req.body;
  if (!customer_id || !event_type || units == null) {
    return res
      .status(400)
      .json({ error: "customer_id, event_type, and units are required" });
  }
  const entry = recordUsageService(customer_id, event_type, units);
  return res.json({
    message: "Usage recorded successfully",
    entry,
  });
};
export const getUsageSummary = (req, res) => {
  const { customer_id } = req.params;
  const summary = getUsageSummaryService(customer_id);
  return res.json(summary);
};
