export interface DemoEnquiry {
  id: string;
  referenceCode: string;
  createdAt: string;
  businessName: string;
  contactPerson: string;
  phone: string;
  email: string;
  businessType: string;
  campaignDuration: string;
  startDate: string;
  message: string;
  status: "NEW" | "CONTACTED" | "CLOSED";
  isSample?: boolean;
}

const STORAGE_KEY = "smartcity_demo_enquiries";

export function getDemoEnquiries(): DemoEnquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to parse demo enquiries from localStorage:", err);
    return [];
  }
}

export function saveDemoEnquiry(enquiry: Omit<DemoEnquiry, "id" | "referenceCode" | "createdAt" | "status">): DemoEnquiry {
  const existing = getDemoEnquiries();
  
  const nextNum = existing.length + 1;
  const numStr = String(nextNum).padStart(3, "0");
  const referenceCode = `SC-2026-${numStr}`;
  
  const newEnquiry: DemoEnquiry = {
    ...enquiry,
    id: `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    referenceCode,
    createdAt: new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
    status: "NEW",
  };

  const updated = [newEnquiry, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Failed to save demo enquiry to localStorage:", err);
  }

  return newEnquiry;
}

export function seedSampleEnquiries(): DemoEnquiry[] {
  const samples: DemoEnquiry[] = [
    {
      id: "sample_1",
      referenceCode: "SC-2026-001",
      createdAt: "24 Aug 2026, 4:30 PM",
      businessName: "Dharwad Silk Sarees",
      contactPerson: "Rajesh Patil",
      phone: "+91 98450 12345",
      email: "rajesh@dharwadsilks.com",
      businessType: "Retail / Fashion",
      campaignDuration: "1 Month",
      startDate: "2026-09-01",
      message: "Looking for high-frequency prime evening slots for festival season launch.",
      status: "NEW",
      isSample: true,
    },
    {
      id: "sample_2",
      referenceCode: "SC-2026-002",
      createdAt: "24 Aug 2026, 6:15 PM",
      businessName: "Karnatak Auto World",
      contactPerson: "Suresh Kulkarni",
      phone: "+91 97312 67890",
      email: "suresh@karnatakauto.in",
      businessType: "Automobile Dealership",
      campaignDuration: "3 Months",
      startDate: "2026-09-15",
      message: "Interested in promoting new vehicle models across peak traffic hours.",
      status: "NEW",
      isSample: true,
    },
  ];

  const existing = getDemoEnquiries();
  const merged = [...existing, ...samples.filter((s) => !existing.some((e) => e.referenceCode === s.referenceCode))];
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch (err) {
    console.error("Failed to seed sample enquiries:", err);
  }

  return merged;
}

export function clearDemoEnquiries(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error("Failed to clear demo enquiries:", err);
  }
}
