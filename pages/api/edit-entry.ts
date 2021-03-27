import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { id, name, email } = req.body
  try {
    if (!id || !name || !email) {
      return res
        .status(400)
        .json({ message: '`id`,`name`, and `email` are all required' })
    }

    const results = await query(
      `
      UPDATE users
      SET name = ?, email = ?
      WHERE id = ?
      `,
      [filter.clean(name), filter.clean(email), id]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
