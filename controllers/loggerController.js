const { logger_pv_sv } = require('../models');

class LoggerController {

  // mendapatkan 30 data logger terakhir 
  static async getLogger(req, res) {
    try {
      const loggers = await logger_pv_sv.findAll({
        order: [['id', 'DESC']],
        limit: 30
      });
      
      if (loggers.length > 0) {
        res.status(200).json({ status: 'success', data: loggers });
      } else {
        res.status(404).json({ status: 'success', message: 'No logs found' });
      }
    } catch (err) {
      console.error('Error fetching logs:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // mendapatkan Sv dan Pv terakhir
  static async getCurrentSvAndPv(req, res) {
    try {
      const loggers = await logger_pv_sv.findAll({
        order: [['id', 'DESC']],
        limit: 1
      });
      
      if (loggers.length > 0) {
        res.status(200).json({ status: 'success', data: loggers });
      } else {
        res.status(404).json({ status: 'success', message: 'No logs found' });
      }
    } catch (err) {
      console.error('Error fetching logs:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // mendapatkan data logger berdasarkan tanggal
  static async getLogsByDate(req, res) {
    const { tanggal } = req.query;

    if (!tanggal) {
      return res.status(400).json({ status: 'error', message: 'Bad Request: Missing date parameter' });
    }

    try {
      const logs = await logger_pv_sv.findAll({
        where: { tanggal },
        order: [['id', 'DESC']]
      });

      if (logs.length > 0) {
        res.status(200).json({ status: 'success', data: logs });
      } else {
        res.status(404).json({ status: 'success', message: 'No logs found for the specified date' });
      }
    } catch (err) {
      console.error('Error fetching logs by date:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // mendapatkan data logger berdasarkan waktu
  static async getLogsByTime(req, res) {
    const { waktu } = req.query;

    if (!waktu) {
      return res.status(400).json({ status: 'error', message: 'Bad Request: Missing time parameter' });
    }

    try {
      const logs = await logger_pv_sv.findAll({
        where: { waktu },
        order: [['id', 'DESC']]
      });

      if (logs.length > 0) {
        res.status(200).json({ status: 'success', data: logs });
      } else {
        res.status(404).json({ status: 'success', message: 'No logs found for the specified time' });
      }
    } catch (err) {
      console.error('Error fetching logs by time:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // mendapatkan data logger berdasarkan tanggal dan rentang waktu
  static async getLogsByDateAndTimeRange(req, res) {
    const { tanggal, waktu_awal, waktu_akhir } = req.query;

    if (!tanggal || !waktu_awal || !waktu_akhir) {
      return res.status(400).json({ status: 'error', message: 'Bad Request: Missing required parameters' });
    }

    try {
      // Fetch logs for the specified date
      const logs = await logger_pv_sv.findAll({
        where: { tanggal },
        order: [['waktu', 'ASC']] // Ensure logs are ordered by time
      });

      // Filter logs by time range
      const filteredLogs = logs.filter(log => {
        const waktu = log.waktu; // Assuming waktu is a string in 'HH:MM:SS' format
        return waktu >= waktu_awal && waktu <= waktu_akhir;
      });

      if (filteredLogs.length > 0) {
        res.status(200).json({ status: 'success', data: filteredLogs });
      } else {
        res.status(404).json({ status: 'success', message: 'No logs found for the specified date and time range' });
      }
    } catch (err) {
      console.error('Error fetching logs by date and time range:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }


  // menambahkan data logger
  static async add(req, res) {
    const { tanggal, waktu, suhu, sv } = req.body;

    try {
      if (!tanggal || !waktu || suhu === undefined || sv === undefined) {
        return res.status(400).json({ status: 'error', message: 'Bad Request: Missing fields' });
      }

      const result = await logger_pv_sv.create({
        tanggal, waktu, suhu, sv
      });

      res.status(201).json({ status: 'success', message: 'Log added successfully', data: result });
    } catch (err) {
      console.error('Error adding new log:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }

  // menghapus data logger berdasarkan id
  static async deleteLogger(req, res) {
    const { id } = req.params;

    try {
      const deleted = await logger_pv_sv.destroy({
        where: { id }
      });

      if (deleted) {
        res.status(200).json({ status: 'success', message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ status: 'error', message: 'Data not found' });
      }
    } catch (err) {
      console.error('Error deleting log:', err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  }
}

module.exports = LoggerController;
