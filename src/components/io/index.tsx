import { GuaranteedDelivery } from './guaranteed-delivery'
import { MessagingPatterns } from './messaging-patterns'
import { SvgTen } from './svg'
import Image from 'next/image'

const styles = {
  littleText: 'text-[#f55b93]',
  sectionHeading: 'text-3xl font-bold',
  paragraph: '',
  'list-item': '--icon-list-item flex gap-2',
  container: 'grid grid-cols-2 gap-4 items-center text-white',
}

export const Integration = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className="f-margin-bottom-131">
          <div className={styles.littleText}>
            Where developers come first
          </div>
        </div>
        <div className="f-margin-bottom-130">
          <h3 className={styles.sectionHeading}>
            Integration is easy with our composable, functional API.
          </h3>
        </div>
        <p className={styles.paragraph}>
          Easily build secure, scalable communications between any
          number of components with our composable, functional API.
        </p>
        <div className="f-content-list-wrapper">
          <div className={styles['list-item']}>
            <TickIcon />

            <span>Reduce code complexity</span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>Easy to test, debug and maintain</span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>Better productivity and reliability</span>
          </div>
        </div>
      </div>
      <div className="f-content-image-wrapper-large">
        <Image
          src="/images/io/integration.svg"
          loading="lazy"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export const BatteriesIncluded = () => {
  return (
    <div className={styles.container}>
      <div className="div-block-2">
        <div className="f-margin-bottom-131">
          <div className={styles.littleText}>Batteries included</div>
        </div>
        <div className="f-margin-bottom-133">
          <h3 className={styles.sectionHeading}>
            Multiple messaging patterns in one place.
          </h3>
        </div>
        <p className={styles.paragraph}>
          Quickly access patterns for streaming, messaging and RPC.
        </p>
        <div className="f-content-list-wrapper">
          <div className={styles['list-item']}>
            <TickIcon />
            <span>
              Easily declare communication patterns between
              components
            </span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>
              No manual configuration of messaging infrastructure
            </span>
          </div>
        </div>
      </div>
      <MessagingPatterns />
    </div>
  )
}

export const HassleFree = () => {
  return (
    <div className={styles.container}>
      <div
        id="w-node-_905ee1a9-29fd-0c3c-9dba-23352b3499d9-8900d6f2"
        className="f-content-image-wrapper-large"
      >
        <Image
          src="/images/io/config.svg"
          loading="lazy"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div id="w-node-_905ee1a9-29fd-0c3c-9dba-23352b3499db-8900d6f2">
        <div className="f-margin-bottom-131">
          <div className={styles.littleText}>No DevOps Required</div>
        </div>
        <div className="f-margin-bottom-132">
          <h3 className={styles.sectionHeading}>
            Hassle-free provisioning with zero configuration.
          </h3>
        </div>
        <p className={styles.paragraph}>
          Say goodbye to manual configuration and management forever.
        </p>
        <div className="f-content-list-wrapper">
          <div className={styles['list-item']}>
            <TickIcon />
            <span>Deploy code quickly with less effort</span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>Automated infrastructure based on your code</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Resiliance = () => {
  return (
    <div className={styles.container}>
      <SvgTen />

      <div id="w-node-_7f968980-d19b-feea-fb84-4c25882af11e-8900d6f2">
        <div className="f-margin-bottom-131">
          <div className={styles.littleText}>
            Resilience for whatever happens next
          </div>
        </div>
        <div className="f-margin-bottom-134">
          <h3 className={styles.sectionHeading}>
            More resilience with message retention and replay.
          </h3>
        </div>
        <p className={styles.paragraph}>
          Store all of your messages and replay whenever you need.
        </p>
        <div className="f-content-list-wrapper">
          <div className={styles['list-item']}>
            <TickIcon />
            <span>
              Protect information and easily recover from failure
            </span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>
              Improve error handling across your applications
            </span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>Keep records for auditing and compliance</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Reliability = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className="f-margin-bottom-136">
          <div className={styles.littleText}>Never miss a beat</div>
        </div>
        <div className="f-margin-bottom-135">
          <h3 className={styles.sectionHeading}>
            Increase reliability with delivery guarantees.
          </h3>
        </div>
        <p className="f-paragraph-large-2">
          Ensure messages are delivered, even during periods of
          volatility.
        </p>
        <div className="f-content-list-wrapper-2">
          <div className="icon-list-item flex gap-2-2">
            <TickIcon />
            <div className="f-paragraph-regular-2">
              Recover from failure without losing data
            </div>
          </div>
          <div className="icon-list-item flex gap-2-2">
            <TickIcon />
            <div className="f-paragraph-regular-2">
              Avoid cascading errors
            </div>
          </div>
          <div className="icon-list-item flex gap-2-2">
            <TickIcon />
            <div className="f-paragraph-regular-2">
              Supports at least once and at most once delivery
            </div>
          </div>
        </div>
      </div>
      <div
        id="w-node-_0230c2fa-2498-ea35-3bca-b013390add12-8900d6f2"
        className="html-embed-3 svgholder w-embed"
      >
        <GuaranteedDelivery />
      </div>
    </div>
  )
}

export const Scalability = () => {
  return (
    <div className={styles.container}>
      <div
        id="w-node-_4bc26dd1-f6c9-4455-5122-ed68f187a669-8900d6f2"
        className="f-content-image-wrapper-large"
      >
        <Image
          src="/images/io/scalability.svg"
          loading="lazy"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div id="w-node-e2b1f5ee-c144-38e7-18f9-27af149e3e8b-8900d6f2">
        <div className="f-margin-bottom-131">
          <div className={styles.littleText}>
            Resilience for whatever happens next
          </div>
        </div>
        <div className="f-margin-bottom-134">
          <h3 className={styles.sectionHeading}>
            Scalable and super fast.
          </h3>
        </div>
        <p className={styles.paragraph}>
          Store all of your messages and replay whenever you need.
        </p>
        <div className="f-content-list-wrapper">
          <div className={styles['list-item']}>
            <TickIcon />
            <span>
              Protect information and easily recover from failure
            </span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>
              Improve error handling across your applications
            </span>
          </div>
          <div className={styles['list-item']}>
            <TickIcon />
            <span>Keep records for auditing and compliance</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TickIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z"
        fill="#49ffb4"
      ></path>
    </svg>
  )
}
