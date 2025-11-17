import { usageDB } from "../../mockDB.js";
import { PRICING } from "../utils/pricingConfig.js";
export const recordUsageService = (customer_id, event_type, units) => {
  const rate = PRICING[event_type];
  if (!rate) {
    throw new Error("Invalid event_type");
  }
  const cost = units * rate;
  const entry = {
    customer_id,
    event_type,
    units,
    cost
  };
  usageDB.push(entry);
  return entry;
};
export const getUsageSummaryService = (customer_id) => {
  const customerUsage = usageDB.filter(u => u.customer_id === customer_id);
  let total_units = 0;
  let total_cost = 0;
  let event_breakdown = {};
  for (const entry of customerUsage) {
    total_units += entry.units;
    total_cost += entry.cost;
    if (!event_breakdown[entry.event_type]) {
      event_breakdown[entry.event_type] = 0;
    }
    event_breakdown[entry.event_type] += entry.units;
  }
  return {
    customer_id,
    total_units,
    event_breakdown,
    total_cost
  };
};
