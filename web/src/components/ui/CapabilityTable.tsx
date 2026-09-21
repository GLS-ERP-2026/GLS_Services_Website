import { capabilityColumns, type EquipmentItem } from '../../data/equipment';

/**
 * Service capability matrix. A tick means the capability is stated in GLS's own
 * service scope for that equipment; a dash means it is not claimed — it is not
 * a statement that the work cannot be done, which is what the footnote says.
 */
export function CapabilityTable({ items, caption }: { items: EquipmentItem[]; caption?: string }) {
  return (
    <div>
      <p className="table-scroll-hint">Scroll the table sideways to see every column.</p>
      <div className="table-wrap">
        <table className="tech-table">
          {caption && <caption className="visually-hidden">{caption}</caption>}
          <thead>
            <tr>
              <th scope="col">Equipment</th>
              {capabilityColumns.map((col) => (
                <th scope="col" key={col.key}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.slug}>
                <th scope="row" className="cell-equipment">
                  {item.name}
                  {item.inspectionScope && <span className="cell-note">{item.inspectionScope}</span>}
                </th>
                {capabilityColumns.map((col) => (
                  <td key={col.key}>
                    {item.scope[col.key] ? (
                      <span className="tick" aria-label="Yes">
                        &#10003;
                      </span>
                    ) : (
                      <span className="tick-none" aria-label="Not stated">
                        &ndash;
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="table-note">
        &#10003; indicates a capability stated in the applicable service scope. A dash indicates the activity is not
        part of the published scope for that equipment &mdash; contact GLS to confirm a specific requirement.
      </p>
    </div>
  );
}
